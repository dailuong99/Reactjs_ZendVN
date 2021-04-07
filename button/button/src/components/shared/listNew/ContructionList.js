import React from 'react';

import ListNew from "./ListNew.js";
import imgBig from '../../../assets/images/blog-1.jpg';
import imgAvata from "../../../assets/images/john-doe.png";

import Button from "../button/Button";
import '../button/Button';

export default function ContructionList({
    mainTitle = ""
}) {
    return (
        <> 
            {
                mainTitle === 'Latest Articles' ? <div className="latest-news section">
                    <div className="tcl-container">
                        <div class="main-title spacing">
                        <h2>{mainTitle}</h2>

                           
                        </div>
                        <div className="latest-news__list spacing">
                            <ListNew
                                classFormAround='latest-news__card'
                                aticleItem='article-item'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='latest-news__card'
                                aticleItem='article-item'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='latest-news__card'
                                aticleItem='article-item'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>

                        </div>
                    </div>
                </div>

                    : null
            }

            {
                mainTitle === 'Popular Articles' ? <div className="popular-news section bg-white-blue">
                    <div className="tcl-container">
                        <div class="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                        <h2>{mainTitle}</h2>
                            {/* <a href="#" class="btn btn-default">View More</a> */}
                            <Button type='submit' classCustom="btn btn-default" name='View More' />
                        </div>
                        <div className="popular-news__list spacing">
                            <div className="popular-news__list--left">
                                <div className="popular-news__list--row">
                                    <ListNew
                                        classFormAround='popular-news__list--card'
                                        aticleItem='article-item style-card'
                                        textDiscriptTitle="Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…"
                                        imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                                    <ListNew
                                        classFormAround='popular-news__list--card'
                                        aticleItem='article-item style-card'
                                        textDiscriptTitle="Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to… 2"
                                        imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>


                                </div>
                            </div>
                            <div className="popular-news__list--right">
                                <div className="popular-news__list--row">
                                    <ListNew
                                        classFormAround='popular-news__list--card'
                                        aticleItem='article-item style-card style-row'
                                        textDiscriptTitle="Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to… 3"
                                        imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    : null
            }
            {
                mainTitle === 'News List' ? <div className="articles-list section">
                    <div className="tcl-container">
                        <div class="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                            <h2>{mainTitle}</h2>
                            {/* <a href="#" class="btn btn-default">View More</a> */}
                            <Button type='submit' classCustom="btn btn-default" name='View More' />
                        </div>
                        <div className="tcl-row">

                            <ListNew
                                classFormAround='tcl-col-12 tcl-col-md-6'
                                aticleItem='article-item style-card'
                                imgBig={imgBig}
                                imgAvata={imgAvata}
                                timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='tcl-col-12 tcl-col-md-6'
                                aticleItem='article-item style-card'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='tcl-col-12 tcl-col-md-6'
                                aticleItem='article-item style-card'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='tcl-col-12 tcl-col-md-6'
                                aticleItem='article-item style-card'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='tcl-col-12 tcl-col-md-6'
                                aticleItem='article-item style-card'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>
                            <ListNew
                                classFormAround='tcl-col-12 tcl-col-md-6'
                                aticleItem='article-item style-card'
                                imgBig={imgBig} imgAvata={imgAvata} timePost="2 min" dateTimePost="June 02, 2020" nameAuthor="John Doe" titleNew="Only Someone Who's Seen The Mummy Will Pass This" altDescript="mô tả hình ảnh"></ListNew>

                        </div>
                    </div>
                </div>
                    : null
            }
        </>
    )
}
