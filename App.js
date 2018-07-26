import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native';
import RNSound from 'react-native-sound';

class SpinTheWheel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: {
                name: 'drumsound.mp3',
                basePath: RNSound.MAIN_BUNDLE,
            },
        };

        this._soundKejutan = null;
        this._handleSound = this._handleSound.bind(this);
    }

    componentWillUnmount() {
        if (this._soundKejutan !== null) {
            this._soundKejutan.release();
        }
    }

    _handleSound() {
        const { file } = this.state;
        const { basePath, name } = file;
        this._soundKejutan = new RNSound(name, basePath, (err) => {
            if (err) {
                console.log('ERROR LOAD SOUND: ', err);
            } else {
                // this._soundKejutan.play((success) => {
                //     console.log('SUCCESS PLAY SOUND: ', success);
                // });
            }
        });
        alert('Playing sound'); // eslint-disable-line
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableHighlight onPress={this._handleSound}>
                    <View style={{
                        backgroundColor: 'blue',
                        paddingVertical: 15,
                        paddingHorizontal: 30,
                    }}>
                        <Text style={{ color: '#fff' }}>
                            {'Play Sound !'}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default SpinTheWheel;
