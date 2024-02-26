import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Touchable, View } from 'react-native';
import { Button, ListItem } from '@rneui/themed';
import { deleteItem, loadItemsFromStorage } from './Data';
import { useIsFocused } from '@react-navigation/native';
// import { Table } from 'react-bootstrap';

const ListScreen = ({ navigation }) => {

	const [book_list, setBookList] = useState([]);
	const is_focused = useIsFocused();

	const deleteBook = async (book_id) => {
		await deleteItem(book_id);
		loadBooks();
	}

	const loadBooks = async () => {
		setBookList(await loadItemsFromStorage());
	}

	useEffect(() => {
		loadBooks();
	}, [is_focused]);

	return (
		<ScrollView>
			{
				book_list.map((book, i) => (
					<ListItem>
						<ListItem.Content>
							<ListItem.Title>{book.title}</ListItem.Title>
							<ListItem.Subtitle>{book.author}</ListItem.Subtitle>
							<ListItem.Subtitle>{book.year}</ListItem.Subtitle>
						</ListItem.Content>
						<ListItem.ButtonGroup
							buttons={['Eliminar', 'Editar']}
							containerStyle={{ marginBottom: 20 }}
							onPress={(button_index) => {
								if (button_index === 0) {
									deleteBook(book.id);
								} else if (button_index === 1) {
									navigation.navigate("Modificar", book);
								}
							}}
						/>
					</ListItem>
				))
			}
		</ScrollView>
	);
}

export default ListScreen;