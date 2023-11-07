import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const BreadProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Britannia Whole Wheat Brown Bread',
            image: require('../images/bread1.png'),
            price: '₹50.00',
            quantity: '250 gm'
        },
        {
            id: 2,
            name: 'Britannia Brown Bread',
            image: require('../images/bb4.png'),
            price: '₹60.00',
            quantity: '650 gm'
        }, {
            id: 3,
            name: 'Britannia Atta Bread',
            image: require('../images/bread7.png'),
            price: '₹70.00',
            quantity: '850 gm'
        },

    ];

    return (
        <ScrollView>
            {products.map((product) => (
                <View key={product.id} style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginHorizontal: 15 }}>
                    <Image source={product.image} style={{ width: 55, height: 55 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 10, fontSize: 13, width: '80%', color: '#222831' }}>{product.name}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 15, color: '#222831', paddingVertical: 5, marginRight: 20 }}>{product.price}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 13, color: '#81939C', marginRight: 20 }}>{product.quantity}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }} onPress={() => (product)}>
                        <Image source={require('../images/add.png')} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                        <Text style={{ color: '#06D6A0', bottom: 1 }}>Add</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const ChocolatesProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Chocolate Product 1',
            image: require('../images/bread2.png'),
            price: '$3.99',
        },
        {
            id: 2,
            name: 'Chocolate Product 1',
            image: require('../images/bread2.png'),
            price: '$3.99',
        },
    ];

    return (
        <ScrollView>
            {products.map((product) => (
                <View key={product.id} style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginHorizontal: 15 }}>
                    <Image source={product.image} style={{ width: 55, height: 55 }} />
                    <Text style={{ flex: 1, marginLeft: 10 }}>{product.name}</Text>
                    <Text>{product.price}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const ProductList: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'bread', title: 'Bread' },
        { key: 'chocolates', title: 'Chocolates' },
    ]);


    const renderScene = () => {
        if (index === 0) {
            return <BreadProducts />;
        } else if (index === 1) {
            return <ChocolatesProducts />;
        }
    };

    const handleAddToCart = (product: any) => {
        // Implement your logic for adding the product to the cart here
    };

    const handleTabPress = (tabIndex: any) => {
        setIndex(tabIndex);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginTop: '3%', marginHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../images/back.png')} style={{ width: 18, height: 18, tintColor: '#35495E' }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#35495E', marginHorizontal: 15 }}>Product List</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../images/search.png')} style={{ width: 20, marginLeft: 100, height: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ top: 5 }} onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../images/cart.png')} style={{ width: 20, height: 20 }} />
                    <View style={{ backgroundColor: 'orange', borderRadius: 50, height: 12, width: 12, alignItems: 'center', justifyContent: 'center', bottom: 26, left: 15 }}>
                        <Text style={{ color: 'white', fontSize: 8 }}>6</Text>
                    </View>

                </TouchableOpacity>
            </View>


            {/* Custom "Tabs" */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                <TouchableOpacity onPress={() => handleTabPress(0)}>
                    <Image source={require('..//images/bread1.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                    <Text style={{ textAlign: 'center', fontSize: 12, top: 5 }}>Bread</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(1)}>
                    <Image source={require('../images/chocolates.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                    <Text style={{ textAlign: 'center', fontSize: 12, top: 5 }}>Chocolates</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(0)}>
                    <Image source={require('..//images/grains.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                    <Text style={{ textAlign: 'center', fontSize: 12, top: 5 }}>Grains</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(1)}>
                    <Image source={require('../images/veg.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                    <Text style={{ textAlign: 'center', fontSize: 12, top: 5 }}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(1)}>
                    <Image source={require('../images/fruits.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                    <Text style={{ textAlign: 'center', fontSize: 12, top: 5 }}>Fruits</Text>
                </TouchableOpacity>

            </View>

            {renderScene()}
        </View>
    );
};

export default ProductList;