import React, {useState} from "react";
import { useHistory } from "react-router-dom";
//redux
import {useSelector, useDispatch} from "react-redux"
//styles
import styles from "../../scss/ProfileForm.module.scss";

const ProfileForm = (props) => {
  const { formType, profile } = props;
  const history = useHistory();
  console.log(profile);
  const profiles = useSelector((state) => state.profiles);
  const userId = useSelector((state) => state.auth.id);

  const [name, setName] = useState(profile.name)
  const [avatar, setAvatar] = useState(profile.src)
  const [formTitle] = useState(formType)


  const handleProfileUpdate = () => {
    console.log(name, avatar)
  }
  const handleDeleteWarning = () => {
    console.log("are you sure?")
  }
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1>{formTitle}</h1>
          <section className={styles.flexContent}>
            <section>
              <img src={profile.src} alt={profile.src} />
            </section>
            <div className={styles.content}>
              <input
                className={styles.profileInput}
                onChange={(e) => setName(e.target.value)}
                value={name}
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
            <button 
            id={styles.save}
            onClick={handleProfileUpdate}
            >
              Save
            </button>
            <button 
            id={styles.cancel} 
            onClick={()=>history.push("/")}
            >
              Cancel
            </button>
            <button 
            id={styles.delete}
            onClick={handleDeleteWarning}
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
