import React, { Fragment, useContext } from "react";
import BetCard from "./BetCard/BetCard";
import Voting from "./Voting";
import LeaderBoard from "./LeaderBoard";
import ParticipantsTable from "./ParticipantsTable";
import { HiLockClosed } from "react-icons/hi";
import { TimerContext } from "../../Context/TimerContext";
import { textConstants } from "../../Constants/textConstants";
import JoinButton from "./JoinButton";
import MatchResult from "./MatchResult";
import GoalCount2 from "./GoalCount2";
import { CommonContext } from "../../Context/CommonContext";

function Index() {
  const { value1 } = useContext(TimerContext);
  const [expired] = value1;

  const { value2 } = useContext(TimerContext);
  const [todaysGame, setTodaysGame] = value2;

  const { value3 } = useContext(TimerContext);
  const [gameEnded] = value3;

  const { value4 } = useContext(TimerContext);
  const [joined] = value4;

  if (gameEnded) {
    setTodaysGame(textConstants.GAME_ENDED);
  }

  const { showGoalCount } = useContext(CommonContext);

  return (
    <Fragment>
      {!gameEnded && (
        <>
          <BetCard />
          <p
            className={
              expired
                ? "dimmedTextColor smallTitle whoWillWinText"
                : "smallTitle whoWillWinText"
            }
          >
            {!expired ? (
              textConstants.WHO_WILL_WIN
            ) : (
              <>
                <HiLockClosed className="smallIcons" />{" "}
                {textConstants.BETTING_ENDED}
              </>
            )}
          </p>
        </>
      )}
      {gameEnded && <MatchResult />}
      {!expired && joined && <Voting />}
      {gameEnded && <LeaderBoard />}
      <ParticipantsTable />
      {!gameEnded && !expired && !joined && <JoinButton />}
      {showGoalCount && <GoalCount2 />}
    </Fragment>
  );
}

export default Index;
