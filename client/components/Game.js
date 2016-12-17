import React from 'react';
import { connect } from 'react-redux';
import { Loop, Stage, World, Body } from 'react-game-kit';
import Matter from 'matter-js';
import Level from './Level';
import GameStore from './GameStore';

class Game extends React.Component {

    physicsInit = (engine) => {
      const ground = Matter.Bodies.rectangle(
        512 * 3, 448,
        1024 * 3, 64,
        {
          isStatic: true,
        },
      );

      const leftWall = Matter.Bodies.rectangle(
        -64, 288,
        64, 576,
        {
          isStatic: true,
        },
      );

      const rightWall = Matter.Bodies.rectangle(
        3008, 288,
        64, 576,
        {
          isStatic: true,
        },
      );

      Matter.World.addBody(engine.world, ground);
      Matter.World.addBody(engine.world, leftWall);
      Matter.World.addBody(engine.world, rightWall);
    }

    render() {
        return (
            <div>
                <div className="score-thinger black">
                    <div className="left">
                        Level: #
                    </div>
                    <div className="right">
                        Score: 000123
                    </div>
                </div>
                <div className="game-area">
                    <Loop>
                        <Stage>
                            <World onInit={this.physicsInit}>
                                <Level store={GameStore} />
                            </World>
                        </Stage>
                    </Loop>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Game);
