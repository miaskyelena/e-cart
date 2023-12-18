import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import ReactPaginate from 'react-paginate'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import FilterSideBar from '../../components/Bar/SideBar/FilterSideBar'
import FilterBar from  '../../components/Bar/FilterBar/FilterBar'
const ReadProducts = ( props ) => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        setListings(props.data)
    }, [props])

    const [pageNumber, setPageNumber] = useState(0)
    const listingsPerPage = 9
    const pagesVisited = pageNumber * listingsPerPage
    const pageCount = Math.ceil(listings.length / listingsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className="ReadProducts">
            <SearchBar />
            <FilterBar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2 className='text-left'
                        >All Listings</h2>
                    
                        <span>
                            Have something to sell? <Link to='/create'>Create a listing</Link>
                        </span>
                    </div>
                </div>
                
                <br />

                <div className="row mx-auto">
                    {listings.slice(pagesVisited, pagesVisited + listingsPerPage).map((listing) => (
                        <div className="col-md-4 mb-3">
                            <Card
                            id={listing.id} 
                            title={listing.title}
                            size={listing.size}
                            image={listing.image}
                            condition={listing.condition}
                            category={listing.category}
                            color={listing.color}
                            price={listing.price}
                            submittedBy={listing.submittedby}
                            submittedOn={listing.submittedon}
                            likes={listing.likes}
                            />
                        </div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination justify-content-center"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    )
}
export default ReadProducts;