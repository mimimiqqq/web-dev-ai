select id, name, plate from cars where id=13; --차정보 
select car_id, service_date, item, memo from maintenance_records;  --정비 이력

--테이블의 별칭을 부여하시는게 편함
select c.id, name, plate, car_id, service_date, item, memo
from cars c
	join maintenance_records m on c.id = m.car_id;

--consultations + cars
select *
from consultations s
	right join cars c on c.id = s. car_id; --오른쪽기준 없으면 null로 채우는

select *
from cars c
	left join consultations s on c.id = s. car_id;

select *
from cars c
	full join consultations s on c.id = s. car_id; --합집합(모든데이터)
	
	--mauntenance_schedules랑 cars 정보에서 plate, name, item, priority 조회
	select plate, name, item
	from maintenance_schedules m 
		join cars c on m.car_id=c.id;
	
	--cars, consultations, consultation_items 에서 
	--plate, contact, in_date,customer_request, work_details 조회
	select plate, contact, in_date,customer_request, work_details
	from cars car
		join consultations c on c.car_id = car.id
		join consultation_items ci on ci.consultation_id =c.id;	
	
	--테이블 : 카스, 메인탄스_레코드
	--차 이름별 마지막 정비일(서비스데이터)
	select name, count(*) as count
	from maintenance_schedules m
	join cars c on m.car_id=c.id 
	where status = '완료'
	group by name
	order by count desc
	limit 5;
	
	
		--차 이름별 마지막 정비일(서비스데이터)
	select name, count(*) as count
	from maintenance_schedules m
	join cars c on m.car_id=c.id 
	group by name;

	