import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { handleLogout } from '../services/authService';

const ProfileScreen = (props) => {

    console.log(props);

    // TODO: handle logout
    const Logout = () => {
        handleLogout();
    }

    return (
        <SafeAreaView>
            <View style={{padding:20, paddingTop:50}}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                <Text>email: {props.user.email}</Text>
                <Text style={{marginBottom:50}}>Username: {props.user.displayName ? props.user.displayName : "No Display Name set"}</Text>

                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={Logout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen