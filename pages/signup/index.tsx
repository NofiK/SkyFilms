import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../src/hooks/redux";
import { movieSlice } from "../../src/store/reducers/MovieSlice";
import { AppDispatch } from "../../src/store/store";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { AiOutlineRollback } from "react-icons/ai";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";

const SignUp = () => {
  const sliderRef = useRef<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const isLogged = useAppSelector((state) => state.movieReducer.isLogged);
  const { login } = movieSlice.actions;
  const router = useRouter();

  console.log(isLogged);
  const next = (e: any) => {
    e.preventDefault();
    sliderRef.current.slickNext();
  };
  const completeSignUp = (e: any) => {
    e.preventDefault();
    dispatch(login(true));
    router.push("/");
  };
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    swipe: false,
  };
  return (
    <section className={styles.signUp}>
      <div className={styles.slider}>
        <Slider {...settings} ref={sliderRef}>
          <div key={1}>
            <form onSubmit={(e) => next(e)} className={styles.signUpForm}>
              <h1>Sign Up</h1>
              <div className={styles.input_container}>
                <input type="text" />
                 <HiOutlineMail className={styles.inputIcon} size={17}/>
                <label>Email</label>
              </div>
              <div className={styles.input_container}>
                <input type="text" />
                <HiLockClosed className={styles.inputIcon} size={17}/>
                <label>Create your password</label>
              </div>
              <div className={styles.input_container}>
                <input type="text" />
                <HiLockClosed className={styles.inputIcon} size={17}/>
                <label>Repeat your password please</label>
              </div>
              <button className={styles.signUpBtn}>Next Step</button>
              <p>
                If you already have an account, please{" "}
                <span className={styles.logInBtn}>Log In</span>
              </p>
            </form>
          </div>
          <div key={2}>
            <form onSubmit={completeSignUp} className={styles.signUpForm}>
              <AiOutlineRollback
                size={55}
                className={styles.navigateBack}
                onClick={() => sliderRef.current.slickPrev()}
              />
              <h1>Almost complete</h1>
              <div className={styles.input_container}>
                <input type="text" />
                <label>Full Name</label>
              </div>
              <div className={styles.input_container}>
                <input type="text" />
                <label>Surname</label>
              </div>
              <div className={styles.input_container}>
                <input type="text" />
                <label>Enter your age</label>
              </div>
              <button className={styles.signUpBtn}>Complete</button>
              <p>
                If you already have an account, please{" "}
                <span className={styles.logInBtn}>Log In</span>
              </p>
            </form>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SignUp;
