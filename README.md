# React Native Uninitialized State Error

This repository demonstrates a common error in React Native: accessing a state variable before it has been initialized.  The error typically manifests as an undefined value being accessed. This example shows the issue and provides a solution using useEffect and optional chaining. 

## Bug
The `Bug.js` file contains a React component that attempts to access a state variable immediately upon render.  This results in an error because the state hasn't finished updating yet. 

## Solution
The `BugSolution.js` file demonstrates how to resolve this by using useEffect to run code after the component has mounted and state has been initialized. Optional chaining is also used to gracefully handle potential null values. 