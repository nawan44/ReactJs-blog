import React, {Component} from 'react';
import {Grid} from 'react-mdl';

class GameAR extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div className="karya">

                            <iframe
                                src="http://www.nawina.com"
                                frameBorder="none"
                                width="100%"
                                height="500px">
                                Game
                            </iframe>
                            <h2>Game 2D</h2>
                            <p>
                                First-person shooter Game bergenre adventure ini dibuat dengan dengan Game
                                Engine Unity dengan menggunakan bahasa pemrograman C#.
                            </p>
                           
                        </div>


                    </div>

                </Grid>

            </div>
         )
        }
    }
export default GameAR;