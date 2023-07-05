import React from "react";
import "./App.css";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}
                       appearance={
                           {
                               layout: {
                                   helpPageUrl: "https://clerk.dev/support",
                                   termsPageUrl: "https://clerk.dev/terms",
                               }
                           }
                       }>
            <SignedIn>
                <Welcome />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </ClerkProvider>
    );
}

function Welcome() {
    return <div>Hello you are signed in</div>;
}

export default App;
