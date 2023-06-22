import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <Link to="/sign-in">
        <h2>Sign In Page</h2>
      </Link>
      <button onClick={logGoogleUser}>Sign in with Google</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;