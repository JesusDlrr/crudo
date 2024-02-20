import React from 'react';
import { View, Button } from 'react-native';
import { addItem, loadItemsFromStorage } from './Data';
import { Formik } from 'formik';
import { Input } from '@rneui/themed';
// import { FormGroup } from 'react-bootstrap';

const FormScreen = ({ navigation }) => {
	const newBook = async (values) => {
		let books = await loadItemsFromStorage();
		await addItem({ id: books.length, ...values });
		navigation.navigate("List");
	}

	return (
		<Formik
			initialValues={{ title: '', author: '', year: '' }}
			onSubmit={(values) => {
				newBook(values);
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
					<Button onPress={(values) => { handleSubmit(values) }} title="Guardar" />
					{/* <Button onPress={() => { navigation.navigate('List') }} title="Submit" /> */}
				</View>
			)}
		</Formik>
	);
}

export default FormScreen;