--proceso suma unidades
	process(CLK)
	begin
    if(CLK'event and CLK = '1' ) then
	    if(decenas /= "0011" and aux /= "0011" and SENTIDO = '0' ) then	
			if (RST='1') then
				unidades  <= "0000";
				aux  <= "0000";
			elsif (PP = '1') then
				if (unidades = "1001") then
					aux <= aux+1;
					if(aux < "0010")then
						unidades <= "0000";
					end if;
				else
					unidades <= unidades + 1;
				end if;	
			end if;
		elsif(decenas /= "0000" AND unidades /= "0000" and SENTIDO = '1')
            if(unidades = "0000") then
					unidades <= "1001";
				else
					unidades <= unidades - 1;
				end if;
        end if;
	end if;
	end process;
--proceso suma decenas
	process(CLK)
	begin
	if(CLK'event and CLK = '1' ) then
        if(SENTIDO = '0') then
            if (RST='1') then
				decenas  <= "0000";
			elsif (PP = '1' and unidades = "1001") then
				if (decenas = "0010") then	
				--no hace nada deja se sumar
				else
				decenas <= decenas + 1;
				end if;	
			end if;
		elsif(SENTIDO = '1') then
            if(PP = '1' and unidades = "0000") then
				if (decenas = "0000") then	
					--no hace nada deja se restar
				else
					decenas <= decenas - 1;
				end if;	
			end if
        end if;
    end if:
	end process;