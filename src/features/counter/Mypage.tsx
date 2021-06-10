import React, { FC, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  //   ListCompanyInfoAsync,
  CompanyDetailInfoAsync,
} from "./Company/companySlice";

const Mypage = (props: any) => {
  const [Company, SetCompany] = useState([]);
  const location = useLocation();
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    const response = await dispatch(
      CompanyDetailInfoAsync(location.state.detail)
    );
    Array.isArray(response.payload)
      ? SetCompany(response.payload)
      : SetCompany([response.payload]);
  };

  return (
    <div>
      mypage
      <div>
        {Company.map((company, index) => (
          <div key={index}>
            <div>{company.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypage;
