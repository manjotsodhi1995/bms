import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/middleware";
import Navbar from "../components/Navbar";
import { useStore } from "../hooks/useStore";
import { observer } from "mobx-react-lite";
const OrganizationProfile = observer(() => {
    const { orgId } = useParams();
    const navigate = useNavigate();
    const [organizationData, setOrganizationData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {
        root: { auth },
    } = useStore();
   useEffect(() => {
     if (!isLoading && !auth.isAuthenticated) {
       navigate("/");
     }
   }, [auth]);
    const accessToken = auth.accessToken;

    useEffect(() => {
        const fetchOrg = async () => {
            try {
                const response = await axios.get(
                  `http://3.253.146.194:3001/api/v1/organizers/getorgbyid/${orgId}`,
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                );
                console.log(response)
            } catch (error: any) {
                setError(error.message || "An error occurred while fetching data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrg();
    }, [orgId]);

    return (
        <div>
            <Navbar />
            <div className="lg:px-[5%] xl:px-[7%] px-[8vw] w-screen">
      
            </div>
        </div>
    );
});

export default OrganizationProfile;
