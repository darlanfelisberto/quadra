-- This file allow to write SQL commands that will be emitted in test and dev.
-- The commands are commented as their support depends of the database
insert into myentity (id, field) values(1, 'field-1');
insert into myentity (id, field) values(2, 'field-2');
insert into myentity (id, field) values(3, 'field-3');
alter sequence myentity_seq restart with 4;


INSERT INTO public.usuario
(id_usuario, email, nome, "password", salt, username)
VALUES(1, 'darlan@gmail.com', 'darlan', '123456', '12345', '02365495028');
alter sequence usuario_id_usuario_seq restart with 2;

INSERT INTO public.permissao (id_permissao, nome)
VALUES(1, 'admin'),(2, 'user');
alter sequence permissao_id_permissao_seq restart with 3;

INSERT INTO public.usaurio_permissoes
VALUES(1,1),(2,1);





-- INSERT INTO public.usuario
-- (id_usuario, email, nome, "password", salt, username)
-- VALUES(1, NULL, NULL, NULL, NULL, NULL);
