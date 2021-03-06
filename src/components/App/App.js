import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from "../Error/Error";
import { MoviesApiConfig } from "../../utils/MoviesApi";
import * as Auth from "../../utils/Auth";
import { ProtectedRoute, ProtectedRouteSign } from "../ProtectedRoute/ProtectedRoute";
import { useFormWithValidation } from "../ValidationForm/Validation";
import { ApiConfig } from "../../utils/MainApi";
import { UserContext } from "../../context/CurrentUserContext";
import { 
        movieDuration, 
        highResolution, 
        mediumResolution, 
        lowResolution, 
        firstAmount, 
        secondAmount, 
        thirdAmount, 
        fourthAmount, 
        firstAmountNewMovies,
        secondAmountNewMovies,
        thirdAmountNewMovies 
    } from "../../utils/constants";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchNameMovie, setSearchNameMovie] = useState('');
    const [shortMovie, setShortMovie] = useState(false);
    const [allMovies, setAllMovies] = useState([]);
    const [shownCards, setShownCards] = useState([]);
    const [foundMovies, setFoundMovies] = useState([]);
    const [windowWidth, setWindowWidth] = useState();
    const [amountMovies, setAmountMovies] = useState();
    const [buttonMore, setButtonMore] = useState(false);
    const [amountNewCards, setAmountNewCards] = useState();
    const [messageActive, setMessageActive] = useState(false);
    const [messageCards, setMessageCards] = useState('Ничего не найдено');
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [textError, setTextError] = useState('');
    const [saveCards, setSaveCards] = useState([]);
    const [shownSaveCards, setShownSaveCards] = useState([]);
    const [userChecked, setUserChecked] = useState(false);
    const history = useHistory();

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    useEffect(() => {
        if (loggedIn) {
            getAllSavedMovies()
        }
    }, [loggedIn])

    function filterAndShowMovies(Movies) {
        let filteredMovies = filterMovies(Movies);
        showButtonMore(filteredMovies);
        handleAmountMovies();
        setFoundMovies(filteredMovies);
        setShownCards(filteredMovies.slice(0, amountMovies));
        setIsLoading(false);
    }

    function filterMovies(Movies) {
        let filteredMovies = Movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchNameMovie.toLowerCase()));
        if (shortMovie) {
            filteredMovies = filteredMovies.filter((movie) => movie.duration <= movieDuration);
        }
        return filteredMovies
    }

    function filterSavedMovies() {
        setMessageActive(true);
        let filteredMovies = filterMovies(saveCards)
        setShownSaveCards(filteredMovies);
    }

    function saveSearchOptions(Movies) {
        let filteredMovies = filterMovies(Movies);
        localStorage.setItem('searchOptions', JSON.stringify({
            searchNameMovie: searchNameMovie,
            shortMovie: shortMovie,
            foundMovies: filteredMovies,
            shownCards: filteredMovies.slice(0, amountMovies)
        }))
    }

    function showButtonMore(item) {
        if (item.length > amountMovies) {
            setButtonMore(true);
        } else {
            setButtonMore(false);
        }
    }

    function showMovies() {
        setButtonMore(false);
        setIsLoading(true);
        setMessageActive(true);
        if (allMovies.length === 0) {
            MoviesApiConfig.getAllMovies()
                .then((res) => {
                    saveSearchOptions(res);
                    filterAndShowMovies(res);
                    setAllMovies(res);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setMessageActive(true);
                    setMessageCards(`Во время запроса произошла ошибка. 
                    Возможно, проблема с соединением или сервер недоступен. 
                    Подождите немного и попробуйте ещё раз`);
                    console.log(err.status);
                })
        } else {
            saveSearchOptions(allMovies);
            filterAndShowMovies(allMovies);
        }
        getAllSavedMovies()
    }

    function showMore() {
        setShownCards([...shownCards, ...foundMovies.slice(shownCards.length, shownCards.length + amountNewCards)]);
        if (shownCards.length + amountNewCards >= foundMovies.length) {
            setButtonMore(false);
        }
    }

    function handleAmountMovies() {
        if (windowWidth >= highResolution) {
            setAmountMovies(firstAmount);
            setAmountNewCards(firstAmountNewMovies);
        } else if (highResolution > windowWidth && windowWidth >= mediumResolution) {
            setAmountMovies(secondAmount);
            setAmountNewCards(secondAmountNewMovies);
        } else if (mediumResolution > windowWidth && windowWidth >= lowResolution) {
            setAmountMovies(thirdAmount);
            setAmountNewCards(thirdAmountNewMovies);
        } else {
            setAmountMovies(fourthAmount);
            setAmountNewCards(thirdAmountNewMovies);
        }
    }

    function windowResize() {
        setWindowWidth(document.documentElement.clientWidth);
        handleAmountMovies();
    }

    window.onresize = windowResize;

    setTimeout(windowResize, 0);

    function handleTextError(err) {
        err.text()
            .then((res) => {
                setTextError(JSON.parse(res).message)
            })
        setTimeout(() => setTextError(''), 4000);
    }

    function handleRegister() {
        Auth.register(values.email, values.password, values.name)
            .then((res) => {
                setCurrentUser('')
                handleLogin();
                setTextError('');
            })
            .catch((err) => {
                handleTextError(err);
                console.log(err.status)
            })
    }

    function handleLogin() {
        Auth.authorize(values.email, values.password)
            .then((res) => {
                setCurrentUser('');
                tokenCheck();
                resetForm();
                history.push('/movies');
            })
            .catch((err) => {
                handleTextError(err);
                console.log(err.status);
            })
    }

    function tokenCheck() {
        Auth.getContent()
            .then((res) => {
                setLoggedIn(true);
                setUserChecked(true);
                setCurrentUser(res.data[0]);
            })
            .catch((err) => {
                console.log(err.status);
                setUserChecked(true);
            })
    }

    function handleLikeMovies(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        ) {
        let isLike = saveCards.some((card) => card.movieId === movieId)
        const saveCard = saveCards.find((card) => card.movieId === movieId)
        ApiConfig.changeLikeMovie(
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
            isLike,
            saveCard
            )
            .then((res) => {
                getAllSavedMovies();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getAllSavedMovies() {
        ApiConfig.getAllSavedMovies()
            .then((res) => {
                setSaveCards(res);
                setShownSaveCards(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => { 
        tokenCheck();
        setMessageActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function returnToMovies() {
        const searchOptions = JSON.parse(localStorage.getItem('searchOptions'));
        if (searchOptions === null) {
            return
        }
        setShownCards(searchOptions.foundMovies.slice(0, amountMovies));
        setSearchNameMovie(searchOptions.searchNameMovie);
        setShortMovie(searchOptions.shortMovie);
        setFoundMovies(searchOptions.foundMovies);
        showButtonMore(searchOptions.foundMovies);
        setMessageActive(true);
    }

    function handleShortMovie() {
        setShortMovie(!shortMovie);
    }

    function editUser(name, email, func, textError) {
        ApiConfig.editUser(name, email)
            .then((res) => {
                setCurrentUser(res);
                func();
                textError('Данные успешно изменены!');
                resetForm();
            })
            .catch((err) => {
                console.log(err)
                textError('Что-то пошло не так!')
            })
    }

    function logOut() {
        ApiConfig.logOut()
            .then((res) => {
                setCurrentUser({})
                setLoggedIn(false);
                localStorage.removeItem('searchOptions');
                history.push('/');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return(
        <UserContext.Provider value={currentUser}>
            {userChecked &&
                <Switch>
                    <Route exact path="/">
                        <Main 
                            loggedIn={loggedIn}
                        />
                    </Route>
                    <ProtectedRoute 
                        path="/movies"
                        loggedIn={loggedIn}
                        component={Movies}
                        searchNameMovie={searchNameMovie}
                        setSearchNameMovie={setSearchNameMovie}
                        shortMovie={shortMovie}
                        setShortMovie={handleShortMovie}
                        shownCards={shownCards}
                        onSubmit={showMovies}
                        more={buttonMore}
                        showMore={showMore}
                        setMessageActive={setMessageActive}
                        messageActive={messageActive}
                        messageCards={messageCards}
                        isLoading={isLoading}
                        returnToMovies={returnToMovies}
                        handleLikeMovies={handleLikeMovies}
                        saveCards={saveCards}
                    />
                    <ProtectedRoute 
                        path="/saved-movies"
                        loggedIn={loggedIn}
                        component={SavedMovies}
                        searchNameMovie={searchNameMovie}
                        setSearchNameMovie={setSearchNameMovie}
                        shortMovie={shortMovie}
                        setShortMovie={handleShortMovie}
                        handleLikeMovies={handleLikeMovies}
                        saveCards={shownSaveCards}
                        onSubmit={filterSavedMovies}
                        messageActive={messageActive}
                        setMessageActive={setMessageActive}
                        messageCards={messageCards}
                    />
                    <ProtectedRoute 
                        path="/profile"
                        loggedIn={loggedIn}
                        component={Profile}
                        editUser={editUser}
                        logOut={logOut}
                        handleChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                        resetForm={resetForm}
                    />
                    <ProtectedRouteSign 
                        path="/signin"
                        loggedIn={loggedIn}
                        component={Login}
                        textError={textError}
                        handleLogin={handleLogin}
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                        resetForm={resetForm}
                    />
                    <ProtectedRouteSign 
                        path="/signup"
                        loggedIn={loggedIn}
                        component={Register}
                        textError={textError}
                        handleRegister={handleRegister}
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                        resetForm={resetForm}
                    />
                    <Route path="/">
                        <Error />
                    </Route>
                </Switch>
            }
        </UserContext.Provider>

    )
}