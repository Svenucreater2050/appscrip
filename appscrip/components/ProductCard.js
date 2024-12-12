import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <a className={styles.card}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          objectFit="cover"
          className={styles.image}
        />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
      </a>
    </Link>
  );
};

export default ProductCard;