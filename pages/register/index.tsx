import React, { useState } from 'react';
import styles from './index.module.css';

const Register = () => {
    const [userType, setUserType] = useState('');
    const [ngoName, setNgoName] = useState('');
    const [restaurantData, setRestaurantData] = useState({
        name: '',
        address: '',
        latitude: '',
        longitude: '',
        pinCode: '',
        gstNumber: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('User type:', userType);
        if (userType === 'NGO') {
            console.log('NGO name:', ngoName);
        } else if (userType === 'Restaurant') {
            console.log('Restaurant data:', restaurantData);
        }
        // Handle form submission logic here, e.g., call API to register the user
    };

    const predefinedNgos = [
        'NGO 1',
        'NGO 2',
        'NGO 3',
        'NGO 4',
    ];

    const handleRestaurantDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRestaurantData({
            ...restaurantData,
            [e.target.name]: e.target.value,
        });
    };

    const isValidGSTNumber = (gst: string) => {
        const gstRegex = /^(\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z]{1}\d{1})$/;
        return gstRegex.test(gst);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <label htmlFor="email" className={styles.label}>
                            Email:
                        </label>
                        <input type="email" id="email" name="email" className={styles.input} required />
                    </div>
                    <div>
                        <label htmlFor="password" className={styles.label}>
                            Password:
                        </label>
                        <input type="password" id="password" name="password" className={styles.input} required />
                    </div>
                    <div className={styles.radioContainer}>
                        <div className={styles.radioLabel}>
                            <label htmlFor="ngo">NGO</label>
                        </div>
                        <input
                            type="radio"
                            id="ngo"
                            name="userType"
                            value="NGO"
                            checked={userType === 'NGO'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        <div className={styles.radioLabel}>
                            <label htmlFor="restaurant">Restaurant</label>
                        </div>
                        <input
                            type="radio"
                            id="restaurant"
                            name="userType"
                            value="Restaurant"
                            checked={userType === 'Restaurant'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                    </div>
                    {userType === 'NGO' && (
                        <div>
                            <label htmlFor="ngoName" className={styles.label}>
                                NGO Name:
                            </label>
                            <select
                                id="ngoName"
                                name="ngoName"
                                className={styles.select}
                                value={ngoName}
                                onChange={(e) => setNgoName(e.target.value)}
                                required
                            >
                                <option value="">Select an NGO</option>
                                {predefinedNgos.map((name) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {userType === 'Restaurant' && (
                        <>
                            <div>
                                <label htmlFor="name" className={styles.label}>
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    value={restaurantData.name}
                                    onChange={handleRestaurantDataChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className={styles.label}>
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className={styles.input}
                                    value={restaurantData.address}
                                    onChange={handleRestaurantDataChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="latitude" className={styles.label}>
                                    Latitude:
                                </label>
                                <input
                                    type="text"
                                    id="latitude"
                                    name="latitude"
                                    className={styles.input}
                                    value={restaurantData.latitude}
                                    onChange={handleRestaurantDataChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="longitude" className={styles.label}>
                                    Longitude:
                                </label>
                                <input
                                    type="text"
                                    id="longitude"
                                    name="longitude"
                                    className={styles.input}
                                    value={restaurantData.longitude}
                                    onChange={handleRestaurantDataChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="pinCode" className={styles.label}>
                                    PinCode:
                                </label>
                                <input
                                    type="text"
                                    id="pinCode"
                                    name="pinCode"
                                    className={styles.input}
                                    value={restaurantData.pinCode}
                                    onChange={handleRestaurantDataChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gstNumber" className={styles.label}>
                                    GST Number:
                                </label>
                                <input
                                    type="text"
                                    id="gstNumber"
                                    name="gstNumber"
                                    className={styles.input}
                                    value={restaurantData.gstNumber}
                                    onChange={handleRestaurantDataChange}
                                    required
                                    pattern="^(\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z]{1}\d{1})$"
                                    title="Enter a valid GST number (15 characters: 2 digits, 5 uppercase letters, 4 digits, 1 uppercase letter, 1 digit, 1 uppercase letter, 1 digit)"
                                />
                            </div>
                        </>
                    )}
                    <button type="submit" className={styles.button}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
