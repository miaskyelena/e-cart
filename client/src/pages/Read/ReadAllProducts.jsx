import React, {useState, useEffect} from 'react'
import ProductCard from '../../components/card/ProductCard/ProductCard'
import ReactPaginate from 'react-paginate'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import FilterSideBar from '../../components/Bar/SideBar/FilterSideBar'
const ReadAllProducts = ( props ) => {
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
            <FilterSideBar />
            <div className="container" 
            style={{
                overflow: 'hidden',
                zIndex: '1',
                marginTop: '-100px',
                marginLeft: '200px',
            }}
            >
                <h1
                className='mt-3'
                style={{
                    fontWeight: 'bold',
                }}
                >Buy, sell, and shop for anything.</h1><br/>
                <div className='container' ></div>
                <h2 className='text-center'
                style={{
                    fontWeight: 'bold',
                }}
                >All Products</h2><br/>

                <div className="row">
                    {listings.slice(pagesVisited, pagesVisited + listingsPerPage).map((listing) => (
                        <div className="col-md-4 mb-3">
                            <ProductCard
                                id={listing.id}                                title={listing.title}
                                description={listing.description}
                                price={listing.price}
                                image={listing.image}
                                category={listing.category}
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
export default ReadAllProducts