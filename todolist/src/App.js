import React from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import Item from "./components/Item";
import ItemEdit from './components/ItemEdit';
import Items from "./mockdata/Items";

import SweetAlert from "sweetalert-react";
import "./../node_modules/sweetalert/dist/sweetalert.css";
import uuidv4 from 'uuid/v4';
import { orderBy as orderByld } from 'lodash';

class App extends React.Component {
	constructor(props) {
		super(props);
		let arrayLevel = [];
		if (Items.length > 0) {
			for (let i = 0; i < Items.length; i++) {
				if (arrayLevel.indexOf(Items[i].level) === -1) {
					arrayLevel.push(Items[i].level);
				}
			}
		}
		console.log(arrayLevel)
		arrayLevel.sort(function (a, b) { return a - b });
		this.state = {
			items: Items,
			showAlert: false, //Hien thi thong bao
			titleAlert: '', //Lay bang title cua item
			idAlert: '', //Lay bang id cua Item
			//Exit item
			indexEdit: 0,
			idEdit: '',
			nameEdit: '',
			levelEdit: 0,
			arrayLevel: arrayLevel,
			//Form
			showForm: false,
			valueItem: '',
			levelItem: 0,
			//Sort
			sortType: '',
			sortOrder: ''
		};
	}

	renderItem = () => {
		const { items, idEdit, indexEdit, nameEdit, levelEdit, arrayLevel } = this.state;
		if (items.length === 0) {
			return <Item item={0} />
		}
		return items.map((item, index) => {
			if (item.id === idEdit) {
				return (
					<ItemEdit
						key={index}
						indexEdit={indexEdit}
						nameEdit={nameEdit}
						levelEdit={levelEdit}
						arrayLevel={arrayLevel}
						handleEditClickCancel={this.handleEditClickCancel}
						handleEditInputChange={this.handleEditInputChange}
						handleEditSelectChange={this.handleEditSelectChange}
						handleEditClickSubmit={this.handleEditClickSubmit}
					/>
				)
			}
			return <Item
				key={index}
				item={item}
				index={index}
				handleShowAlert={this.handleShowAlert}
				handleEditItem={this.handleEditItem}
			/>;
		});
	};

	handleShowAlert = (item) => {
		this.setState({
			showAlert: true,
			titleAlert: item.name,
			idAlert: item.id
		});
	}

	handleDeleteItem = () => {
		let { idAlert, items } = this.state;
		if (items.length > 0) {
			for (let i = 0; i < items.length; i++) {
				if (items[i].id === idAlert) {
					items.splice(i, 1);
					break;
				}
			}
		}
		this.setState({
			showAlert: false
		});
	}

	handleEditItem = (index, item) => {
		this.setState({
			indexEdit: index,
			idEdit: item.id,
			nameEdit: item.name,
			levelEdit: item.level
		});
	}

	handleEditClickCancel = () => {
		this.setState({
			idEdit: ''
		});
	}

	handleEditInputChange = (value) => {
		this.setState({
			nameEdit: value
		});
	}

	handleEditSelectChange = (value) => {
		this.setState({
			levelEdit: value
		});
	}

	handleEditClickSubmit = () => {
		let { items, idEdit, nameEdit, levelEdit } = this.state;
		if (items.length > 0) {
			for (let i = 0; i < items.length; i++) {
				if (items[i].id === idEdit) {
					items[i].name = nameEdit;
					items[i].level = +levelEdit;
					break;
				}
			}
		}
		this.setState({
			idEdit: ''
		});
	}

	handleShowForm = () => {
		this.setState({
			showForm: !this.state.showForm
		});
	}

	handleFormInputChange = (value) => {
		this.setState({
			valueItem: value
		});
	}

	handleFormSelectChange = (value) => {
		this.setState({
			levelItem: value
		});
	}

	handleFormClickCancel = () => {
		this.setState({
			valueItem: '',
			levelItem: 0
		});
	}

	handleFormClickSubmit = () => {
		let { valueItem, levelItem } = this.state;
		if (valueItem.trim() === 0) return false;
		let newItem = {
			id: uuidv4(),
			name: valueItem,
			level: +levelItem
		};
		Items.push(newItem);
		this.setState({
			items: Items,
			valueItem: '',
			levelItem: 0,
			showForm: false
		});
	}

	handleSort = (sortType, sortOrder) => {
		this.setState({
			sortType: sortType,
			sortOrder: sortOrder
		});
		let { items } = this.state;
		this.setState({
			items: orderByld(items, [sortType], [sortOrder])
		});
	}

	render() {
		return (
			<div className="container">
				<SweetAlert
					show={this.state.showAlert}
					title="Delete Item"
					text={this.state.titleAlert}
					showCancelButton
					onOutsideClick={() => this.setState({ showAlert: false })}
					onEscapeKey={() => this.setState({ showAlert: false })}
					onCancel={() => this.setState({ showAlert: false })}
					onConfirm={() => this.handleDeleteItem()}
				/>
				<Title />
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<Search />
					</div>
					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
						<Sort
							sortType={this.state.sortType}
							sortOrder={this.state.sortOrder}
							handleSort={this.handleSort}
						/>
					</div>
					<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<button
							type="button"
							className="btn btn-info btn-block marginB10"
							onClick={this.handleShowForm}
						>
							{(this.state.showForm) ? 'Close Item' : 'Add Item'}
						</button>
					</div>
				</div>
				<div className="row marginB10">
					<div className="col-md-offset-7 col-md-5">
						<Form
							showForm={this.state.showForm}
							arrayLevel={this.state.arrayLevel}
							valueItem={this.state.valueItem}
							levelItem={this.state.levelItem}
							handleFormSelectChange={this.handleFormSelectChange}
							handleFormClickCancel={this.handleFormClickCancel}
							handleFormClickSubmit={this.handleFormClickSubmit}
							handleFormInputChange={this.handleFormInputChange}
							handleFormSelectChange={this.handleFormSelectChange}
						/>
					</div>
				</div>
				<ListItem renderItem={this.renderItem} />
			</div>
		);
	}
}

export default App;
