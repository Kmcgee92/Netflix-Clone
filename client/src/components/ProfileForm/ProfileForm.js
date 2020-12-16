import React from "react";

//styles
import styles from "../../scss/ProfileForm.module.scss";

const ProfileForm = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1>Edit Profile</h1>
          <section>
            <img></img>
            <div>
              <div>
                <h3>NAME OF PROFILE</h3>
              </div>
              <div>
                <h3>Language:</h3>
              </div>
              <div>
                <h3>Maturity Settings:</h3>
              </div>
              <div>
                <h3>Autoplay controls</h3>
              </div>
            </div>
          </section>
          <div>
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
