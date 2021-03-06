package NyaGames.Just_Run_2;

public class Player {
	private long id;
	private char type;
	private int x, y;
	private int score;
	private boolean cazado;
	private boolean I;
	private boolean O;
	private boolean P;

	Player() {
		this.score = 0;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}
	public char getType() {
		return type;
	}
	public void setType(char c) {
		this.type = c;
	}
	public boolean getCazado() {
		return cazado;
	}
	public void setCazado(boolean c) {
		this.cazado = c;
	}
	public boolean getI() {
		return I;
	}
	public void setI(boolean c) {
		this.I = c;
	}
	public boolean getO() {
		return O;
	}
	public void setO(boolean c) {
		this.O = c;
	}
	public boolean getP() {
		return P;
	}
	public void setP(boolean c) {
		this.P = c;
	}
	@Override
	public String toString() {
		return "Player [id=" + id + ", x=" + x + ", y=" + y + ", score=" + score + "]";
		// return "{\"id\":" + id + ",\"x\":" + x + ",\"y\":" + y + ",\"score\":" +
		// score + "}";
	}
}
