whenever state variables update ,react triggers a reconsiliation cycle (re-rendering the componenet)


* USEEFFECT........
if no dependency array=> useeffect is called on every render
if dependency array is empty =[]=> useeffect is called on only initial render(just once)


useeffect(()=>{

}[])
......................................


* USESTATE

ALWAYS USE INSIDE OF COMPONENTS
TRY TO USE ON THE TOP

............................

*ROUTER

....npm i react-router-dom

....import { createBrowserRouter } from "react-router-dom";


.........................

*  2 types of routing

client side routing
server side routing


...../// study about use params

..................................................

Hooks:--->
hooks is utlity function

* customHooks:--->Advantages--(reusabe ,modular,readable)

................................
*chunking
*code splitting
*dynamic bundling
*Lazy Loading
*On Demand Loading
*dynamic import
<!-- const Grocery=lazy(()=>import("./components/Grocery")) -->

.................................................
*Tailwind Css Notes....
--Rapidly build modern websites without ever leaving your HTML

---------------

Study About Higher Order Components*****


------------------------------------
------------------------------------
------------------------------------
Accordion is a vvip topic

-------------------------------
***react context*** study about it

--------------------------------

**** REDUX******

button --> dispatch action -> its call a function->modify the cart

--> function is  known as reducer

-->

*selector use for read the data..
selector(subscribing to store)

Add->dispatch action -> function(reducer)->which update slice of sotre 
and cart component subscribe the store using slector

..............................
#Redux Toolkit
-install @reduxjs/toolit and react-redux
-Build  our store
-connect our store to our app
-slice(cartSlice)
-dispatch(action)
-selector
-// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux

-------------------------------------------------