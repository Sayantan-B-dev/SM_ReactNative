
import { View, Text, StyleSheet, TouchableOpacity ,TouchableHighlight} from 'react-native';
import React from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const AnimatedCardFlip = () => {
    const flip = useSharedValue(0);  // Shared value for controlling the rotation
    const frontimage = require('../assets/images/girl.jpeg');
    const backimage = require('../assets/images/girl2.jpeg');

    // Front card animation
    const animatedStyleFront = useAnimatedStyle(() => {
        return {
            transform: [
                { perspective: 1000 },  // Perspective for 3D effect
                { rotateY: `${flip.value}deg` },  // Rotate Y axis for flipping
            ],
            opacity: flip.value < 90 ? 1 : 0,  // Front is visible when flip is < 90 degrees
        };
    });

    // Back card animation
    const animatedStyleBack = useAnimatedStyle(() => {
        return {
            transform: [
                { perspective: 1000 },  // Perspective for 3D effect
                { rotateY: `${flip.value + 180}deg` },  // Rotate Y axis for the back card
            ],
            opacity: flip.value >= 90 ? 1 : 0,  // Back is visible when flip is >= 90 degrees
        };
    });

    // Flip logic (on press)
    const handleFlip = () => {
        flip.value = withSpring(flip.value === 0 ? 180 : 0);  // Toggle between 0 and 180 degrees
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardContainer} onPress={handleFlip}>
                <Animated.View style={[animatedStyleFront, styles.card]}>
                    <Animated.Image
                        source={frontimage}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>Front</Text>
                </Animated.View>
                <Animated.View style={[animatedStyleBack, styles.card]}>
                    <Animated.Image
                        source={backimage}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>Back</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f5',  // Light background for a clean look
        padding: 20,
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',  // Ensures the cards are stacked properly
    },
    card: {
        width: 250,
        height: 350,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 5,
        position: 'absolute',  // Make sure cards overlap properly
        backfaceVisibility: 'hidden',  // Ensures the back of the card is hidden when flipped
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    text: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
});


export default AnimatedCardFlip;
