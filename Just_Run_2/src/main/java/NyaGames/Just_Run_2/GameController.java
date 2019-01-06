package NyaGames.Just_Run_2;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class GameController {
	Map<Long, Player> players = new ConcurrentHashMap<>();
	AtomicLong nextId = new AtomicLong(0);

	public Collection<Player> getPlayers() {
		return players.values();
	}

	public Player newChaser() {
		Player player = new Player();
		long id = nextId.incrementAndGet();
		player.setType('c');
		player.setId(id);
		player.setX(60);
		player.setY(300);
		players.put(player.getId(), player);
		return player;
	}
	
	public Player newEscapist() {
		Player player = new Player();
		long id = nextId.incrementAndGet();
		player.setType('e');
		player.setId(id);
		player.setX(1000);
		player.setY(300);
		players.put(player.getId(), player);
		return player;
	}

	public void deletePlayer(long id) {
		Player savedPlayer = players.get(id);
		if (savedPlayer != null) {
			players.remove(savedPlayer.getId());
		}
	}	
}

