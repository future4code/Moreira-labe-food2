import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/Urls";
import { OrderCard, TextContainer, Box } from "./styled";


export default function HistoryCard() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const getHistory = async () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    try {
      const history = await axios.get(`${BASE_URL}/orders/history`, headers);
      setOrders(history.data.orders);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const historyCard = orders?.map((order) => {
    const date = new Date(order.createdAt);
    const formattedDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
    return (
      <TextContainer key={Math.floor(Date.now() * Math.random()).toString(36)}>
        <OrderCard>
          <Box>
          <p className="title" >{order.restaurantName}</p>
          <p className="date">{formattedDate}</p>
          <p className="total">
            <b>TOTAL: R${order.totalPrice.toFixed(2)}</b>
          </p>
          </Box>
        </OrderCard>
      </TextContainer>
    );
  });

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      {historyCard}
      
    </div>
  );
};

