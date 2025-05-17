@media (min-width: 700px) 
    #menu-btn {
        display: none;
    }
    nav {
        margin-top: 0;
        display: flex;
        justify-content: center;
    }
    nav ul {
        flex-direction: row;
        justify-content: center;
        background: none;
        border-radius: 0;
    }
    nav li {
        border-bottom: none;
    }
    nav a {
    padding: 1rem 2rem;
    border-radius: 4px;
    margin: 0 0.5rem;

}
@media (min-width: 700px) {
    main {
        grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
        gap: 2rem;
        justify-items: center;
    }
    figure {
        max-width: 220px;
    }
}
@media (min-width: 1100px) {
    main {
        grid-template-columns: repeat(4, 1fr); /* 4 columns on large screens */
    }
}