import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavBar from '../../components/NavBar';

export default function UserVue({ navigation }) {

    // Hardcoded version number for now, but to be dynamic in the future
    const appVersion = '1.0.1'; 

    const deleteAccount = () => {
        //TODO delete account logic in BACKEND
        return { status: 200, message: 'Account deleted' };
    };

    const logout = () => {
        //TODO logout logic in BACKEND
        return { status: 200, message: 'Logged out' };
    };

    const reportBug = () => {
        //TODO Report bug logic in BACKEND
        return { status: 200, message: 'Bug reported' };
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserPreferences')}>
                <Text style={styles.buttonText}>User Preferences</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={reportBug}>
                <Text style={styles.buttonText}>Report a Bug</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={deleteAccount}>
                <Text style={styles.buttonText}>Delete my Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            <Text style={styles.appVersion}>Version {appVersion}</Text>

            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a', // Dark background
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffcc00', // Gold color for a striking effect
        textShadowColor: '#000000', // Shadow for a more ominous effect
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#ffffff', // White background for button
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#444444', // Slightly lighter border for button
        width: '80%', // Ensuring all buttons are the same width
        alignItems: 'center', // Center the text inside the button
    },
    buttonText: {
        color: '#000000', // Black text on buttons
        fontSize: 18,
        textAlign: 'center',
    },
    appVersion: {
        fontSize: 12, // Much smaller font size for version information
        color: '#ffffff', // White text
        marginTop: 10,
    },
});
