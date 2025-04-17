import { DataStore } from 'aws-amplify';
import { Profile } from '../models';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const [userSettings, setUserSettings] = useState({
  profilePic: '',
  fullName: '',
  jobTitle: '',
});

useEffect(() => {
  const loadProfile = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const profiles = await DataStore.query(Profile, (p) =>
        p.owner.eq(user.username)
      );
      if (profiles.length > 0) {
        const profile = profiles[0];
        setUserSettings({
          profilePic: profile.profilePic,
          fullName: profile.fullName,
          jobTitle: profile.jobTitle,
        });
      }
    } catch (err) {
      console.error('Error loading profile:', err);
    }
  };

  loadProfile();
}, []);
