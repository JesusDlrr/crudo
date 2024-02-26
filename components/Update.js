import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import { Button, Input } from '@rneui/themed';
import { updateItem } from './Data';

const EditScreen = ({ navigation }) => {

    const route = useRoute();

    const editBook = async (values) => {
        await updateItem(values.id, values);
        navigation.navigate("Libros");
    }

    return (
        <Formik
            initialValues={{ id: route.params.id, title: route.params.title, author: route.params.author, year: route.params.year }}
            onSubmit={(values) => {
                editBook(values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Input
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        value={values.title}
                    />
                    <Input
                        onChangeText={handleChange('author')}
                        onBlur={handleBlur('author')}
                        value={values.author}
                    />
                    <Input
                        onChangeText={handleChange('year')}
                        onBlur={handleBlur('year')}
                        value={values.year}
                    />
                    <Button onPress={(values) => { handleSubmit(values) }} title="Aplicar" />
                </View>
            )}
        </Formik>
    );
}

export default EditScreen;