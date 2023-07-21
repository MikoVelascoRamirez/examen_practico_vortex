--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg18.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    id integer NOT NULL,
    usuario character varying(100) NOT NULL,
    mensaje text NOT NULL,
    fecha date NOT NULL,
    "time" time without time zone NOT NULL
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- Name: comentarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentarios_id_seq OWNER TO postgres;

--
-- Name: comentarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_seq OWNED BY public.comentarios.id;


--
-- Name: correcciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.correcciones (
    libro character varying(20) NOT NULL,
    comentario integer NOT NULL
);


ALTER TABLE public.correcciones OWNER TO postgres;

--
-- Name: libros; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.libros (
    isbn character varying(20) NOT NULL,
    nombre character varying(100) NOT NULL,
    genero character varying(40) NOT NULL,
    imagen character varying(100) NOT NULL,
    autor_nombre character varying(100) NOT NULL,
    autor_apellidos character varying(100) NOT NULL,
    serie character varying(50) NOT NULL
);


ALTER TABLE public.libros OWNER TO postgres;

--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    usuario character varying(100) NOT NULL,
    nombre character varying(50) NOT NULL,
    apellidos character varying(100) NOT NULL,
    correo character varying(60) NOT NULL,
    password character varying(100) NOT NULL,
    tipo character varying(15) NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: comentarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id SET DEFAULT nextval('public.comentarios_id_seq'::regclass);


--
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (id, usuario, mensaje, fecha, "time") FROM stdin;
\.


--
-- Data for Name: correcciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.correcciones (libro, comentario) FROM stdin;
\.


--
-- Data for Name: libros; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.libros (isbn, nombre, genero, imagen, autor_nombre, autor_apellidos, serie) FROM stdin;
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (usuario, nombre, apellidos, correo, password, tipo) FROM stdin;
\.


--
-- Name: comentarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_seq', 1, false);


--
-- Name: comentarios pk_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT pk_id PRIMARY KEY (id);


--
-- Name: libros pk_isbn; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libros
    ADD CONSTRAINT pk_isbn PRIMARY KEY (isbn);


--
-- Name: usuarios pk_usuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_usuario PRIMARY KEY (usuario);


--
-- Name: comentarios fk_comentarios_usuario_usuario_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT fk_comentarios_usuario_usuario_usuarios FOREIGN KEY (usuario) REFERENCES public.usuarios(usuario) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: correcciones fk_correcciones_comentario_comentarios_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.correcciones
    ADD CONSTRAINT fk_correcciones_comentario_comentarios_id FOREIGN KEY (comentario) REFERENCES public.comentarios(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: correcciones fk_correcciones_libro_libros_isbn; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.correcciones
    ADD CONSTRAINT fk_correcciones_libro_libros_isbn FOREIGN KEY (libro) REFERENCES public.libros(isbn) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

