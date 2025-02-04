// import { useState } from 'react'

import "./App.css";
import Button from "./Button";
import Card from "./Card";
import ChangeTest from "./ChangeTest";
import Counter from "./Counter";
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import MyComponent from "./MyComponent";
import ProfilePicture from "./ProfilePicture";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import ColorPicker from "./ColorPicker";

function App() {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 45 },
  //   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coconut", calories: 159 },
  //   { id: 5, name: "pineapple", calories: 37 },
  // ];

  // // const fruits = [];

  // const vegetables = [
  //   { id: 6, name: "potatoes", calories: 110 },
  //   { id: 7, name: "celery", calories: 15 },
  //   { id: 8, name: "carrots", calories: 25 },
  //   { id: 9, name: "corn", calories: 63 },
  //   { id: 10, name: "broccoli", calories: 50 },
  // ];

  return (
    <>
      {/* <Header />
      <Food />
      <Card />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <UserGreeting />
      <Footer /> */}
      {/* <ProfilePicture /> */}
      <Counter />
      {/*<MyComponent />}
      {/* <ChangeTest /> */}
      {/* <ColorPicker /> */}
      {/* <Button />
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null} */}

      {/* <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patirc" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student /> */}
    </>
  );
}

export default App;
