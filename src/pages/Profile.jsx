import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Profile = () => {
    const { users } = useContext(AuthContext);

    if (!users) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
            {/* ✅ Profile Header */}
            <section className="text-center">
                <img 
                    src={users.photoURL || "https://via.placeholder.com/150"} 
                    alt="User Profile" 
                    className="w-32 h-32 mx-auto rounded-full mb-4" 
                />
                <h1 className="text-3xl font-bold">{users.displayName || "User Name"}</h1>
                <p className="text-lg text-gray-500">{users.email}</p>
            </section>

            {/* ✅ User Info */}
            <section className="bg-base-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">User Details</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-xl">Name</h3>
                        <p className="text-lg">{users.displayName || "No Name Provided"}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Email</h3>
                        <p className="text-lg">{users.email}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Joined</h3>
                        <p className="text-lg">{new Date(users.metadata.creationTime).toLocaleDateString()}</p>
                    </div>
                </div>
            </section>

            {/* ✅ Logout Button */}
            <div className="text-center mt-8">
                <button 
                    onClick={() => auth.signOut()} 
                    className="btn btn-accent text-white px-6 py-3 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
