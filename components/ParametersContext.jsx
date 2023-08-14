import { createContext, useContext, useState } from "react";

const ParametersContext = createContext();

export const useParametersContext = () => {
  return useContext(ParametersContext);
};

export const ParametersProvider = ({ children }) => {
  // Strategy parameters
  const [strategy, setStrategy] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [strategyList, setStrategyList] = useState([
    {
      label: "Loading...",
      value: null,
    },
  ]);
  // Session parameters
  const [bankroll, setBankroll] = useState("");
  const [betUnit, setBetUnit] = useState("");
  const [profitGoal, setProfitGoal] = useState("");
  // Game parameters
  const [game, setGame] = useState("roulette");
  const [rouletteType, setRouletteType] = useState("european");
  const [baccaratType, setBaccaratType] = useState("player");
  const [blackjackType, setBlackjackType] = useState("no_strategy");

  const resetFields = () => {
    setStrategy("");
    setShowDropDown(false);
    setBankroll("");
    setBetUnit("");
    setProfitGoal("");
    setGame("roulette");
    setRouletteType("european");
    setBaccaratType("player");
    setBlackjackType("no_strategy");
  };

  return (
    <ParametersContext.Provider
      value={{
        form: {
          strategy,
          showDropDown,
          strategyList,
          bankroll,
          betUnit,
          profitGoal,
          game,
          rouletteType,
          baccaratType,
          blackjackType,
          setStrategy,
          setShowDropDown,
          setStrategyList,
          setBankroll,
          setBetUnit,
          setProfitGoal,
          setGame,
          setRouletteType,
          setBaccaratType,
          setBlackjackType,
        },
        resetFields,
      }}
    >
      {children}
    </ParametersContext.Provider>
  );
};
