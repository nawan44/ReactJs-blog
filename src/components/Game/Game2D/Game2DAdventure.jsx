import React, {Component} from 'react';
import {Grid} from 'react-mdl';

class Game2D extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div class="webgl-content">
                            <div id="gameContainer" style={{width: '960px' ,height: '600px' }}> </div>
                          
                          <div class="footer">
                                <div class="webgl-logo"></div>
                                <div class="fullscreen" onclick="gameInstance.SetFullscreen(1)"></div>
                                <div class="title">Ninja</div>
                            </div>
                            
                        </div>
                    </div>

                </Grid>

            </div>
        )
    }
}
export default Game2D;