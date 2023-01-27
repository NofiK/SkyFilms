import React from "react";
import styles from "./styles.module.scss";
import {
  ActorDetailsProps,
  DefaultMovieProps,
} from "../../src/types/movieTypes";
import Modal from "react-modal";
import MovieSlider from "../../src/components/MovieSlider/MovieSlider";
interface ActorCardProps {
  actorDetails: any;
  actorMovies: any;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(18, 18, 18)",
  },
  overlay: {
    background: "rgb(23, 23, 23)",
    opacity: "97%",
  },
};
Modal.setAppElement("body");
const ActorCard = ({ actorDetails, actorMovies }: ActorCardProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className={styles.actorCard}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modalBiography}>
          <p>Actor's Biography:</p>
          {actorDetails?.biography && (
            <span className={styles.modalBiography}>
              {actorDetails.biography}
            </span>
          )}
        </div>
      </Modal>
      <div className={styles.aboutActor}>
        <img
          className={styles.actorPhoto}
          src={
            actorDetails?.photo === "https://image.tmdb.org/t/p/w500null"
              ? "https://i.pinimg.com/originals/60/88/0e/60880ef799bb1edd172d645c39906c29.jpg"
              : actorDetails?.photo
          }
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div className={styles.actorDescription}>
            {actorDetails?.name && actorDetails?.career && (
              <>
                <h1 className={styles.actorName}>{actorDetails?.name}</h1>
                <div className={styles.tableRow}>
                  <p className={styles.tableColumn1}>Career:</p>
                  <p className={styles.tableColumn2}>{actorDetails?.career}</p>
                </div>
              </>
            )}

            {actorDetails?.birthday && (
              <div className={styles.tableRow}>
                <p className={styles.tableColumn1}>Date of Birth:</p>
                <p className={styles.tableColumn2}>{actorDetails.birthday}</p>
              </div>
            )}
            {actorDetails?.deathday && (
              <div className={styles.tableRow}>
                <p className={styles.tableColumn1}>Date of Death:</p>
                <p className={styles.tableColumn2}>{actorDetails.deathday}</p>
              </div>
            )}
            {actorDetails?.place_of_birth && (
              <div className={styles.tableRow}>
                <p className={styles.tableColumn1}>Place of Birth:</p>
                <p className={styles.tableColumn2}>
                  {actorDetails.place_of_birth}
                </p>
              </div>
            )}
          </div>
          <div className={styles.actorBiography}>
            <p>Actor's Biography:</p>
            {actorDetails?.biography && (
              <>
                {actorDetails?.biography?.slice(0, 950)}
                {actorDetails?.biography?.length > 949 && (
                  <span onClick={openModal}>...</span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <MovieSlider
        movies={actorMovies}
        sliderLabel={`Actor's movies`}
        slidesToScroll={5}
      />
    </section>
  );
};

export default ActorCard;
