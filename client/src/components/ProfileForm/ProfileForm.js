import React, {useState} from "react";
import { useHistory } from "react-router-dom";
//redux
import {useSelector, useDispatch} from "react-redux"
import { deleteProfile } from "../../Redux/actions/profileActions"
//styles
import styles from "../../scss/ProfileForm.module.scss";
import moduleStyles from "../../scss/deleteProfile.module.scss"

const ProfileForm = (props) => {
  const { formType, profile } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  
  const profiles = useSelector((state) => state.profiles);
  const userId = useSelector((state) => state.auth.id);

  const [name, setName] = useState(profile.name || "");
  const [avatar, setAvatar] = useState(
    profile.src ||
      "https://www.gannett-cdn.com/-mm-/e7bef351cc08da150633ba6c18a0366a427196fb/r=300/https/abs.twimg.com/sticky/default_profile_images/default_profile_2_400x400.png"
  );
  const [formTitle] = useState(formType);
  const [deleteWarning, setDeleteWarning] = useState(false);

  const handleProfileUpdate = () => {
    console.log( userId, name, avatar);
  };
  const deleteProfileModal = (boolean) => {
    setDeleteWarning(boolean)
    if (boolean) {
      dispatch(deleteProfile(userId, profile.profileId))
    }
  };
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1>{formTitle}</h1>
          <section className={styles.flexContent}>
            <section>
              <img src={avatar} alt={avatar} />
            </section>
            <div className={styles.content}>
              <input
                className={styles.profileInput}
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder={"who's new?"}
              ></input>

              <div>
                <h3>Language:</h3>
                <select disabled>
                  <option>English</option>
                </select>
              </div>
              <div>
                <h3>Maturity Settings:</h3>
                <span>
                  <h4> All Maturity Ratings </h4>
                </span>
                <h5>
                  Show titles of <b>all maturity ratings</b> for this profile.
                </h5>
                <button>Edit</button>
              </div>
              <div>
                <h3>Autoplay controls</h3>
                <h6>
                  <p>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span className={styles.customCheckbox}>✔️</span>
                    </label>
                    <span className={styles.labelText}>
                      Autoplay home page on all devices.
                    </span>
                  </p>
                  <br />
                  <p>
                    <label>
                      <input type="checkbox" defaultChecked />
                      <span className={styles.customCheckbox}>✔️</span>
                    </label>
                    <span className={styles.labelText}>
                      Autoplay previews on click while browsing.
                    </span>
                  </p>
                </h6>
              </div>
            </div>
          </section>
          <div className={styles.buttonContainer}>
            <button id={styles.save} onClick={handleProfileUpdate}>
              Save
            </button>
            <button id={styles.cancel} onClick={() => history.push("/")}>
              Cancel
            </button>
            {formType !== "Add Profile" 
            && <button id={styles.delete} onClick={()=>setDeleteWarning(true)}>
              Delete Profile
            </button>}
          </div>
        </div>
      </div>
      {deleteWarning && 
        <div className={moduleStyles.warningOverlay}>
        <div className={moduleStyles.warningContainer}>
          <h2>You are about to delete this profile.</h2>
          <div>
            <button onClick={()=> deleteProfileModal(true)}>Confirm</button>
            <button onClick={()=> deleteProfileModal(false)}>Cancel</button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ProfileForm;
