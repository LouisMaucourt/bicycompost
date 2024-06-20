import React from 'react';
import { types, Image, RichText, Text } from 'react-bricks/frontend';
import Button from '../button/Button';
import classNames from 'classnames';

const ProductDescription = ({ propNamePrefix }) => {
    return (
        <div className='background-green'>
            <div className='flexx2 container-content'>
                <Image
                    propName={`${propNamePrefix}-image`}
                    alt="Fallback alt tag"
                    maxWidth={500}
                    imageClassName='image-50'
                />
                <div>
                    <Text
                        propName={`${propNamePrefix}-title`}
                        placeholder="Type a title..."
                        renderBlock={({ children }) => (<h3 style={{ color: 'white' }}>{children}</h3>)}
                    />
                    <RichText
                        propName={`${propNamePrefix}-description`}
                        renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                        placeholder='Description...'
                        allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                    />
                    <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div className='flex-row' style={{ justifyContent: "flex-start" }}>
                            <Image
                                propName={`${propNamePrefix}-icon`}
                                alt="Fallback alt tag"
                                maxWidth={30}
                                imageClassName='image-20'
                            />
                            <RichText
                                propName={`${propNamePrefix}-descriptionIcon`}
                                renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                        <div className='flex-row' style={{ justifyContent: "flex-start" }}>
                            <Image
                                propName={`${propNamePrefix}-iconTwo`}
                                alt="Fallback alt tag"
                                maxWidth={30}
                                imageClassName='image-20'
                            />
                            <RichText
                                propName={`${propNamePrefix}-descriptionIconTwo`}
                                renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                        <div className='flex-row' style={{ justifyContent: "flex-start" }}>
                            <Image
                                propName={`${propNamePrefix}-icon`}
                                alt="Fallback alt tag"
                                maxWidth={30}
                                imageClassName='image-20'
                            />
                            <RichText
                                propName={`${propNamePrefix}-descriptionIcon`}
                                renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                    </div>
                    <div className='margin-h-30'>
                        <Button propName={`${propNamePrefix}-button`} buttonStyle='button-orange default btn-text-image' buttonText='coucu' buttonPath='/devis' />
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDescription.schema = {
    name: 'productdescription',
    label: 'ProductDescription',
    getDefaultProps: () => ({
        title: 'Default Title',
    }),
    sideEditProps: [],
};

export default ProductDescription;
