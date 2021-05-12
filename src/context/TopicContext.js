import React, { useReducer } from 'react';
import axios from 'axios'
import { calcsubPrice, calcTotalPrice, getCountProductsCart } from '../components/helpers/calcPrice';


export const topicContext = React.createContext();

const INIT_STATE = {
    topicsData: [],
    topicDetails: null,
    searchData: [],
    paginationPages: 1,
    cart: {},
    cartLength: getCountProductsCart()
}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case "GET_TOPICS": 
            return {...state, topicsData: action.payload }
        case "GET_TOPIC_DETAILS":
            return{...state, topicDetails: action.payload}
        case "SEARCH":
            return {...state, topicsData: action.payload}
        case "CHANGE_CART_COUNT":
            return {...state, cartLength: action.payload}
        case "GET_CART":
            return {...state, cart: action.payload}
        default: return state
    }
}

const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function postNewTopic(topic){
        axios.post('http://localhost:8000/topics' , topic)

        await getTopics()
    }

    async function getTopics(){
        console.log(window.location.search)
        let { data } = await axios.get(`http://localhost:8000/topics?_limit=8&${window.location.search.replace(/\?/, "")}`)
    
        dispatch({
            type: "GET_TOPICS",
            payload: data
        })
    }

    async function getTopicDetails(id){
        let { data } = await axios.get(`http://localhost:8000/topics/${id}`)
        dispatch({
            type: "GET_TOPIC_DETAILS",
            payload: data
        })
    }

    async function saveTopic(id, newTopic){
        await axios.patch(`http://localhost:8000/topics/${id}`,newTopic)
        getTopicDetails(id)
    }

    async function search(value){
       let { data } =  await axios.get(`http://localhost:8000/topics?q=${value}`)
       dispatch({
           type: 'SEARCH',
           payload: data
       })
    }   

    async function  deleteTask(id){
        await axios.delete(`http://localhost:8000/topics/${id}`)

        getTopics()
    }

    //comment

    async function sendComment (topic) {
        await axios.patch(`http://localhost:8000/topics/${topic.id}`, topic)
    }
    

    // KORZINA
    function addProductToCard(product){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
        }
        

        
        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length >0){
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }else{
            cart.products.push(newProduct)
        }

        newProduct.subPrice = calcsubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
        // stopPropagation()
    }

    function getCart(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    function changeProductCount(count, id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcsubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }


    function checkProductInCart(id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }let newCart =cart.products.filter(elem => elem.item.id ===id)
            return newCart.length > 0 ? true: false
    }

    return (
        <topicContext.Provider value={{
            topicsData: state.topicsData,
            searchData: state.searchData,
            topicsData: state.topicsData,
            topicDetails: state.topicDetails,
            cart: state.cart,
            cartLength: state.cartLength,
            getTopicDetails,
            postNewTopic ,
            getTopics,
            saveTopic,
            search,
            deleteTask,
            addProductToCard,
            checkProductInCart,
            changeProductCount,
            getCart,
            sendComment
        }}>
            {children} 
        </topicContext.Provider>
    )
}
export default TopicContextProvider;