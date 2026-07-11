export const Picture = ({ avif, webp, fallback, className, alt = "", priority = false, lazy = false }) => (
    <picture>
        <source type="image/avif" srcSet={avif} sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" />
        <source type="image/webp" srcSet={webp} sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px" />
        <img src={fallback} alt={alt} className={className} 
            fetchPriority={priority ? "high" : "auto"} 
            loading={lazy ? "lazy" : "eager"} 
            decoding={lazy ? "async" : "sync"} />
    </picture>
);
