/*
    모델링(테이블을 만들기 위해서는 데이터베이스 모델링이 필요하다.)
    1. 개념 : 관리할 대상과 관계, 서비스 규칙
            -고객명, 고객전화, 음식명, 음식가격, 가게명 등...
    2. 논리 : 대상별 항목, PK와 FK, 중복을 줄이는 구조(정규화)
    (개념을 기반으로 데이터베이스에 맞게 구조화
            -고객테이블, 음식테이블, 가게테이블 등...)  1 대 다관계들
    3. 물리 : 테이블실질적으로구성하는단계(실제 데이터베이스에 저장되는 구조)

    DBMS(Database Management System) : 데이터베이스 관리 시스템
     -Oracle, MySQL, PostgreSQL MaroaDB 등 (데이터베이스를 생성, 관리, 운영하는 소프트웨어)

    SQL문법(Structured Query Language)
    :관계형 데이터베이스에서 데이터를 조회하거나 조작하기 위해 사용하는 언어

    DDL(Data Definition Language) : 데이터 정의어
    -DBMS(데이터베이스, 테이블, 뷰, 인덱스 등)을 생성, 수정, 삭제하는데 사용되는 언어
    (CREATE : 생성, ALTER : 수정, DROP : 삭제)
*/
--CREATE TABLE은 데이터베이스에 테이블을 생성하는 SQL 명령어입니다.
--(표이름,괄호안의열이름과 자료형 제약조건정한다)

/*
    자료형
    -bigint / int8 : 큰 범위의 정수, 보통 행 ID와 외래키에 사용(pk/fk)
    -integer / int4 : 정수, 소수점 없는 값
    -text : 길이를 미리 정하지 않는 문자열
    -numeric(12,0) : 정확한 숫자(전체 12자리, 소수점 아래 0자리)
    -date : 날짜만
    -timestamptz : 날짜와 시간
    -boolean : true 또는 false
    
    제약조건
    -primary key (PK) : 테이블에서 각 행을 고유하게 식별하는 열(각행식별함. null과 중복허용안함)not null+unique
    -references (FK, foreign key) : 다른 테이블의 기본 키를 참조하는 열(다른테이블의행을참조함)
    -not null : 해당 열은 NULL 값을 허용하지 않음(null금지)
    -unique : 해당 열의 값은 중복될 수 없음(중복금지)
    -check : 해당 열의 값이 특정 조건을 만족해야 함(조건검사, 값이조건만족하는지?)
    -default : 열을 생략할때 채움
*/
--generated always as identity 는 ID를 자동으로 만든다.
CREATE TABLE stores( 
    ID bigint generated always as identity PRIMARY KEY,
    name text NOT NULL,
    addr text not null
);
--RLS(Row Level Security)는 행 단위 접근 정책을 적용하는 PostgreSQL기능
alter table stores enable row level security;
create table oders(
    id bigint generated always as identity primary key,
    customer_id bigint not null references customers(id),
    srore_id bigint references stores(id),    
    food_name text not null,
    food_price integer not null check(food_price >=0),
    quantity integer not null check(quantity > 0),
    ordered_at timestamptz default now() 

);
--ALTER
create table ddl_notes(
    id bigint generated always as identity primary key,
    label text,
    amount text,
    status text default '대기'
);
--데이터 추가
insert into ddl_notes(label, amount)
values('점검', '12000');

--데이터 조회
select * from ddl_change;


--컬럼 추가 : 기존 행의 memo는 NULL
alter table ddl_notes add column memo text;
--기존 행에 '일반'이 들어감
alter table ddl_notes add column category text default '일반';
--자료형 변경 : 문자열 ->정수(바꿀수 없는 값이 잇으면 using 설정)
alter table ddl_notes alter column memo type integer 
using memo::integer;

--컬럼 이름변경
alter table ddl_notes rename column memo to count;
--컬럼 삭제
alter table ddl_notes drop column count;
--제약조건(제약조건명 같이 추가하는걸 추천)
alter table ddl_notes add constraint ddl_notes_label_uq unique(label);
--제약조건 삭제
alter table ddl_notes drop constraint ddl_notes_label_uq;
--테이블 이름 변경
alter table ddl_notes rename to ddl_change;


--테이블 삭제(if exists를 추가하면 있을때만 삭제. 에러가 나지 않음)
drop table if exists ddl_change;