import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/searchResultCardStyle.css"

function SearchResultCard({ res }) {

    return (
      <Link style={{textDecoration:"none"}} to={`/invoice/display/email/${res._id}`}>
        <div className="cardRow">
          <div className="col">{res.customerDetails.name}</div>
          <div className="col">{res.customerDetails.phone}</div>
          <div className="col">{res.customerDetails.email}</div>
        </div>
      </Link>
    );

}

export default SearchResultCard
