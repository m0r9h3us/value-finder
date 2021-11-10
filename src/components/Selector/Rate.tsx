import { IValue } from "../../types";
import useValueContext from "../../hooks/useValueContext";
import SelectorColumn from "./SelectorList";
import { useState } from "react";

interface RateProps {
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

interface ICompared {
  id1: string;
  id2: string;
  winnerID: string;
}

/**
 * Primary UI component for user interaction
 */
const Rate = ({ absoluteHeight = true }: RateProps) => {
  const { selected } = useValueContext();
  const [sorted, setSorted] = useState<IValue[]>(selected);
  const [currentItemsIdx, setCurrentItemsIdx] = useState([0, 1]);
  const [swapped, setSwapped] = useState(false);
  const [finishedSorting, setFinishedSorting] = useState(false);
  const [compared, setCompared] = useState<ICompared[]>([]);

  const maxIndex = selected.length - 1;

  const addToCompared = (id1: string, id2: string, winnerID: string) => {
    const existingWinnerID = findInCompared(id1, id2);
    if (!existingWinnerID)
      setCompared((prev) => {
        return [
          ...prev,
          {
            id1: id1,
            id2: id2,
            winnerID: winnerID,
          },
        ];
      });
  };

  const findIdxInSorted = (id: string) => {
    return sorted.findIndex((it) => it.id === id);
  };

  const updateSorted = (winnerIdx: number) => {
    setSorted((prev) => {
      const newArr = [...prev];

      // swap the elements compared elements
      if (winnerIdx !== currentItemsIdx[0]) {
        newArr[currentItemsIdx[0]] = newArr.splice(
          currentItemsIdx[1],
          1,
          newArr[currentItemsIdx[0]]
        )[0];
        setSwapped(true);
      }

      return newArr;
    });
  };

  // THERE IS A MASSIVE ERROR IN THE UPDATING OF THE INDIZES Try to seperate stuff!
  const updateIndex = () => {
    setCurrentItemsIdx((prev) => {
      if (prev[1] + 1 <= maxIndex) {
        const nextItem1 = sorted[prev[0] + 1];
        const nextItem2 = sorted[prev[1] + 1];
        skipCompare(nextItem1, nextItem2);

        return [prev[0] + 1, prev[1] + 1];
      } else {
        if (swapped === false) {
          setFinishedSorting(true);
        }
      }
      setSwapped(false);
      const nextItem1 = sorted[0];
      const nextItem2 = sorted[1];
      skipCompare(nextItem1, nextItem2);
      return [0, 1];
    });
    console.log("INDEX END: " + currentItemsIdx);
  };

  const findInCompared = (id1: string, id2: string) => {
    let winnerID;
    const existsID = compared.findIndex((it) => {
      if (
        (it.id1 === id1 && it.id2 === id2) ||
        (it.id1 === id2 && it.id2 === id1)
      )
        return true;
      return false;
    });
    if (existsID !== -1) {
      winnerID = compared[existsID].winnerID;
      return winnerID;
    }
    return winnerID;
  };

  const skipCompare = (nextItem1: IValue, nextItem2: IValue) => {
    const winnerID = findInCompared(nextItem1.id, nextItem2.id);
    if (winnerID) {
      const winnerIdx = findIdxInSorted(winnerID);
      updateSorted(winnerIdx);
      updateIndex();
    }
  };

  const handleItemClick = (winnerIdx: number) => {
    console.log("INDEX START: " + currentItemsIdx);

    addToCompared(
      sorted[currentItemsIdx[0]].id,
      sorted[currentItemsIdx[1]].id,
      sorted[winnerIdx].id
    );

    updateSorted(winnerIdx);
    updateIndex();
  };

  const height = absoluteHeight ? "h-screen" : "";
  return (
    <>
      {true && (
        <div className="flex flex-grow p-2">
          <SelectorColumn
            title="Sorted Values"
            content={sorted}
            multiCol={false}
            onItemClick={() => {}}
          ></SelectorColumn>
        </div>
      )}
      {!finishedSorting && (
        <div className="flex justify-center flex-grow m-2 rounded bg-primary-700">
          <div className="flex flex-col items-stretch justify-center p-10 m-20 rounded h-60 bg-primary-600">
            <div
              onClick={handleItemClick.bind(null, currentItemsIdx[0])}
              className="p-4 my-5 text-xl font-bold text-center rounded hover:bg-secondary-400 bg-primary-500"
            >
              {sorted[currentItemsIdx[0]].title}
            </div>
            <div
              onClick={handleItemClick.bind(null, currentItemsIdx[1])}
              className="p-4 my-5 text-xl font-bold text-center rounded bg-primary-500 hover:bg-secondary-400"
            >
              {sorted[currentItemsIdx[1]].title}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rate;
