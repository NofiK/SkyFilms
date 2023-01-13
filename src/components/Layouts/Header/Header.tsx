import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux";
import { fetchSearchedMovies } from "../../../store/reducers/MovieSlice";
import useDebounce from "../../../hooks/useDebounce";
import { DefaultMovieProps, MovieDetailsProps } from "../../../types/movieTypes";

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<any>(null)
  const debouncedValue = useDebounce<string>(searchValue, 1000);
  const dispatch = useDispatch<AppDispatch>();
  const searchResult = useAppSelector(
    (state) => state.movieReducer.searchedMovies
  );
  useEffect(() => {
    if (searchValue.trim()) {
      dispatch(fetchSearchedMovies(searchValue));
    }
  }, [debouncedValue]);
  const selectMovie = () =>{
    setIsOpenSearch(false)
    setSearchValue('')
  }
  return (
    <>
      <section className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <img className={styles.logo} src="/Logo.png" alt="" />
          </Link>
        </div>
        <div className={styles.navBar}>
          <div>
            <Link href={"/"}>
              <h2>Movies</h2>
            </Link>
            <Link href={"/"}>
              <h2>TV Shows</h2>
            </Link>
            <Link href={"/"}>
              <h2>Documentaries</h2>
            </Link>
          </div>

          <div>
              <div className={styles.searchBar}>
                <input
                  ref={inputRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className={
                    isOpenSearch ? styles.activeInput : styles.disabledInput
                  }
                  type="text"
                />
                {isOpenSearch && (
                  <div className={styles.searchResultBox}>
                    {searchValue &&
                      searchResult.map((movie: MovieDetailsProps) => {
                        return (
                          <Link href={`/movies/${movie.id}`}>
                          <div onClick={selectMovie} className={styles.resultItem}>
                            <img className={styles.resultImg} src={movie.miniPoster} alt="" />
                            <div className={styles.resultDescription}>
                              <div className={styles.resultTitleYear}>
                              <p className={styles.resultTitle}>{movie.title}</p>
                              <p className={styles.resultYear}>{movie?.release?.slice(0,4)}</p>
                              </div>
                              <div>
                                <img className={styles.imdbIcon} src="/imdb.png" alt="" />
                                 {": "+movie.rate}
                              </div>
                            </div>
                          </div>
                          </Link>
                        );
                      })}
                  </div>
                )}

                <div className={styles.searchIconBox}>
                  <RxMagnifyingGlass
                    onClick={() => {
                      setIsOpenSearch(!isOpenSearch);
                      inputRef.current.focus();
                    }}
                    className={styles.searchIcon}
                  />
                </div>
              </div>
            <Link href={"/"}>
              <h2>Sign Up</h2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
