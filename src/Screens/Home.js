import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add, addtext, remove } from "../reducers/action";
const { height, width } = Dimensions.get('screen')
export default function Home() {
    const dispatch = useDispatch()
    const onText = (value) => {
        dispatch(addtext(value))
    }
    const text = useSelector(store => store.TestReducers.text)
    const data = [
        { id: Math.random(), text: text }
    ]
    const onADD = () => {
        dispatch(add(data))
    }
    const onDelete = (item) => {
        dispatch(remove(item))
    }
    const data1 = useSelector(store => store.TestReducers.data)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    onChangeText={(value) => onText(value)}
                    value={text}
                    style={styles.textInput}
                />
                <TouchableOpacity
                    onPress={() => onADD()}
                    style={styles.add}
                >
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
            {
                data1 && data1.map((item) => {
                    return (
                        <View key={item.id.toString()} style={styles.content}>
                            <View style={[styles.textInput, { marginBottom: 10 }]}>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => onDelete(item)}
                                style={styles.add}
                            >
                                <Text>Remove</Text>
                            </TouchableOpacity>
                        </View>

                    )
                })
            }

        </ScrollView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    textInput: {
        width: width - 150,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    add: {
        width: 60,
        height: 40,
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 14,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})