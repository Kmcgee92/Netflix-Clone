import React, {useState} from "react";

//redux
import {useSelector, useDispatch} from "react-redux"
//styles
import styles from "../../scss/ProfileForm.module.scss";

const ProfileForm = (props) => {
  const { title, profile } = props;
  console.log(profile);
  const profiles = useSelector((state) => state.profiles);
  const userId = useSelector((state) => state.auth.id);
  const [name, setName] = useState(profile.name)

  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h1>{title}</h1>
          <section>
            <img src={profile.src} alt={profile.src}   />
            <div>
              <div>
                <input onChange={(e)=>setName(e.target.value)} value={name}></input>
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
