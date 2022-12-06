import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsBookmark, BsShare, BsEye, BsStarFill } from 'react-icons/bs';

const News = () => {
    const news = useLoaderData()
    const { title, author, details, image_url, total_view, rating } = news;
    return (
        <div>
            <Card className='m-2'>
                <Card.Header as="h5" className='d-flex  justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='fluid rounded-circle' src={author.img} style={{ height: '90px' }}></Image>
                        <div className='ms-2'>
                            <p className='mb-0'>{author.name ? author.name : "no author info"}</p>
                            <small>Published date : {author.published_date ? author.published_date : 'no published date info'}</small>
                        </div>
                    </div>
                    <div>
                        <BsBookmark />   <BsShare />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <Card.Footer>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div><BsEye />  {total_view ? total_view : 'no views info'}</div>
                            <div><BsStarFill className='text-warning' />   {rating.number}</div>
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;